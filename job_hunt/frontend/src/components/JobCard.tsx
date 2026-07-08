import { ExternalLink, Building, MapPin, Calendar, ShieldCheck, Zap } from 'lucide-react';

interface JobCardProps {
  match: {
    job: {
      title: string;
      company: string;
      location: string;
      description: string;
      url: string;
      posted_date: string;
    };
    match_score: number;
    match_reason: string;
  };
}

export default function JobCard({ match }: JobCardProps) {
  const { job, match_score, match_reason } = match;

  return (
    <div className="bg-white shadow-sm overflow-hidden sm:rounded-lg border border-gray-200 transition-all hover:shadow-md">
      <div className="px-4 py-5 sm:px-6 flex justify-between items-start">
        <div className="flex-1">
          <h3 className="text-xl leading-6 font-bold text-gray-900">{job.title}</h3>
          <div className="mt-2 max-w-2xl text-sm text-gray-500 flex flex-wrap gap-4">
            <span className="flex items-center text-gray-700">
              <Building className="w-4 h-4 mr-1 text-gray-400" />
              {job.company}
            </span>
            <span className="flex items-center text-gray-700">
              <MapPin className="w-4 h-4 mr-1 text-gray-400" />
              {job.location || 'Remote'}
            </span>
            <span className="flex items-center text-gray-700">
              <Calendar className="w-4 h-4 mr-1 text-gray-400" />
              {job.posted_date || 'Recent'}
            </span>
          </div>
        </div>
        <div className="ml-4 flex flex-col items-end">
          <div className="flex items-center space-x-1 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            <Zap className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-bold text-blue-700">{match_score}% Match</span>
          </div>
          <div className="mt-2 flex items-center text-xs text-green-600 bg-green-50 px-2 py-0.5 rounded border border-green-100">
            <ShieldCheck className="w-3 h-3 mr-1" />
            Verified Authentic
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
        <p className="text-sm text-gray-700 line-clamp-3 mb-4">{job.description}</p>
        
        <div className="bg-gray-50 p-3 rounded-md border border-gray-100 mb-4">
          <p className="text-xs text-gray-600 font-medium">Why it's a match:</p>
          <p className="text-sm text-gray-800 italic mt-1">"{match_reason}"</p>
        </div>

        <div className="flex justify-end">
          <a
            href={job.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Apply Now
            <ExternalLink className="ml-2 -mr-1 h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  );
}
