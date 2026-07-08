import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchAndValidateJobs, getJobMatches } from '../api';
import JobCard from '../components/JobCard';
import { RefreshCw, CheckCircle, ArrowLeft, Filter } from 'lucide-react';

export default function Dashboard() {
  const { id } = useParams<{ id: string }>();
  const [matches, setMatches] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [fetchingJobs, setFetchingJobs] = useState(false);
  const [minMatchScore, setMinMatchScore] = useState(50); // Default to 50%

  useEffect(() => {
    let isMounted = true;

    const loadMatches = async () => {
      if (!id) return;
      setLoading(true);
      try {
        const data = await getJobMatches(parseInt(id, 10));
        if (isMounted) setMatches(data);
      } catch (error) {
        console.error("Failed to load matches", error);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    const handleFetchNewJobsOnInit = async () => {
      setFetchingJobs(true);
      try {
        await fetchAndValidateJobs();
        await loadMatches();
      } catch (error) {
        console.error("Failed to fetch jobs", error);
      } finally {
        if (isMounted) setFetchingJobs(false);
      }
    };

    // Initially trigger a fetch to populate db if empty (mock behavior)
    handleFetchNewJobsOnInit();

    return () => {
      isMounted = false;
    };
  }, [id]);

  const handleFetchNewJobs = async () => {
    setFetchingJobs(true);
    try {
      await fetchAndValidateJobs();
      if (id) {
        setLoading(true);
        const data = await getJobMatches(parseInt(id, 10));
        setMatches(data);
        setLoading(false);
      }
    } catch (error) {
      console.error("Failed to fetch jobs", error);
      alert("Failed to fetch jobs from API.");
    } finally {
      setFetchingJobs(false);
    }
  };

  const filteredMatches = matches.filter(match => match.match_score >= minMatchScore);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <Link to="/" className="text-sm text-blue-600 hover:text-blue-800 flex items-center mb-2">
              <ArrowLeft className="w-4 h-4 mr-1" />
              Back to Profile
            </Link>
            <h1 className="text-3xl font-extrabold text-gray-900">Your Matched Jobs</h1>
            <p className="mt-1 text-sm text-gray-500">
              Jobs from the past 30 days, rigorously vetted and scored against your profile.
            </p>
          </div>
          <button
            onClick={handleFetchNewJobs}
            disabled={fetchingJobs}
            className={`inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white ${fetchingJobs ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
          >
            <RefreshCw className={`w-4 h-4 mr-2 ${fetchingJobs ? 'animate-spin' : ''}`} />
            {fetchingJobs ? 'Scanning Web...' : 'Fetch New Openings'}
          </button>
        </div>

        {/* Filter Section */}
        <div className="bg-white p-4 rounded-md shadow-sm mb-6 border border-gray-100 flex items-center justify-between gap-4">
           <div className="flex items-center gap-2 text-gray-700 font-medium">
              <Filter className="w-5 h-5 text-blue-500" />
              <span>Minimum Match Score: <span className="text-blue-600 font-bold">{minMatchScore}%</span></span>
           </div>
           <input 
             type="range" 
             min="50" 
             max="90" 
             step="5"
             value={minMatchScore} 
             onChange={(e) => {
               const val = parseInt(e.target.value, 10);
               setMinMatchScore(val < 50 ? 50 : val);
             }}
             className="w-48 sm:w-64 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
           />
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8 rounded-r-md">
          <div className="flex">
            <div className="flex-shrink-0">
              <CheckCircle className="h-5 w-5 text-blue-500" aria-hidden="true" />
            </div>
            <div className="ml-3">
              <p className="text-sm text-blue-800 font-medium">
                Real-Time MNC & Fortune 500 Aggregator Active.
              </p>
              <p className="text-sm text-blue-700 mt-1">
                Fetching live opportunities directly from top global enterprises, verified LinkedIn postings, and official corporate career pages across India.
              </p>
            </div>
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        ) : filteredMatches.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-lg shadow-sm border border-gray-100">
            <p className="text-gray-500">No jobs found above a {minMatchScore}% match threshold.</p>
            {minMatchScore > 50 && (
              <button onClick={() => setMinMatchScore(50)} className="mt-4 text-blue-600 hover:underline">Lower threshold to 50%</button>
            )}
          </div>
        ) : (
          <div className="space-y-6">
            {filteredMatches.map((match, index) => (
              <JobCard key={index} match={match} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
