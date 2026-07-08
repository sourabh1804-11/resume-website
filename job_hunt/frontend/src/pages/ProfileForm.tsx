import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { createProfile } from '../api';
import { Briefcase, User, GraduationCap, MapPin } from 'lucide-react';
import { AutocompleteTags } from '../components/AutocompleteTags';
import { IT_ROLES, IT_SKILLS } from '../constants/suggestions';

const LOCAL_STORAGE_KEY = 'job_hunt_profile_data';

const DEFAULT_TEST_PROFILE = {
  full_name: "Sourabh Singhal",
  email: "sourabhsinghal005@gmail.com",
  phone: "09399984665",
  years_experience: "29",
  primary_skills: "Azure, Azure Data Factory, Azure Databricks, Databricks, Python, SQL",
  secondary_skills: "",
  preferred_roles: "Data Engineer",
  location_preference: "Bangalore",
  education: "",
  certifications: ""
};

export default function ProfileForm() {
  const { register, handleSubmit, watch, setValue, reset } = useForm({
    defaultValues: DEFAULT_TEST_PROFILE
  });
  const navigate = useNavigate();

  const primarySkills = watch('primary_skills', DEFAULT_TEST_PROFILE.primary_skills);
  const secondarySkills = watch('secondary_skills', DEFAULT_TEST_PROFILE.secondary_skills);
  const preferredRoles = watch('preferred_roles', DEFAULT_TEST_PROFILE.preferred_roles);

  // Load saved data on mount
  useEffect(() => {
    const savedData = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedData) {
      try {
        const parsed = JSON.parse(savedData);
        reset(parsed);
      } catch (e) {
        console.error("Failed to parse saved profile data", e);
        reset(DEFAULT_TEST_PROFILE);
      }
    } else {
      // If no local storage, explicitly reset to default to trigger watch updates
      reset(DEFAULT_TEST_PROFILE);
    }
  }, [reset]);

  const onSubmit = async (data: any) => {
    // Manually inject values from custom components
    data.primary_skills = primarySkills;
    data.secondary_skills = secondarySkills;
    data.preferred_roles = preferredRoles;

    if (!data.primary_skills || !data.preferred_roles) {
      alert("Please provide at least one Primary Skill and Preferred Role.");
      return;
    }

    try {
      // Save data for next time
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));

      const profile = await createProfile({
        ...data,
        years_experience: parseInt(data.years_experience, 10)
      });
      navigate(`/dashboard/${profile.id}`);
    } catch (error) {
      console.error('Failed to create profile', error);
      alert('Failed to save profile. Please check the backend connection.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-2xl">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 flex items-center justify-center gap-3">
          <Briefcase className="w-8 h-8 text-blue-600" />
          IT Professional Profile
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Enter your details to find verified, highly-matched job openings.
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-2xl">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 border border-gray-100">
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            
            <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-gray-700">Full Name *</label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    {...register('full_name', { required: true })}
                    className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md py-2 px-3 border"
                    placeholder="John Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Email Address *</label>
                <div className="mt-1">
                  <input
                    type="email"
                    {...register('email', { required: true })}
                    className="focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3 border"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone</label>
                <div className="mt-1">
                  <input
                    type="text"
                    {...register('phone')}
                    className="focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3 border"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Years of Experience *</label>
                <div className="mt-1">
                  <input
                    type="number"
                    {...register('years_experience', { required: true, min: 0 })}
                    className="focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3 border"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-6 pt-4 border-t border-gray-200">
              <div>
                <label className="block text-sm font-medium text-gray-700">Primary Skills (Max 7) *</label>
                <div className="mt-1">
                  <AutocompleteTags 
                    options={IT_SKILLS}
                    value={primarySkills}
                    onChange={(val) => setValue('primary_skills', val)}
                    placeholder="e.g. React, TypeScript, Python"
                    className="w-full"
                    maxTags={7}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Secondary Skills (Max 5)</label>
                <div className="mt-1">
                  <AutocompleteTags 
                    options={IT_SKILLS}
                    value={secondarySkills}
                    onChange={(val) => setValue('secondary_skills', val)}
                    placeholder="e.g. Docker, AWS"
                    className="w-full"
                    maxTags={5}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Preferred Roles *</label>
                <div className="mt-1">
                  <AutocompleteTags 
                    options={IT_ROLES}
                    value={preferredRoles}
                    onChange={(val) => setValue('preferred_roles', val)}
                    placeholder="e.g. Frontend Engineer, Full Stack Developer"
                    className="w-full"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
                 <div>
                    <label className="block text-sm font-medium text-gray-700">Location Preference *</label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <MapPin className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        {...register('location_preference', { required: true })}
                        className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md py-2 px-3 border"
                        placeholder="Remote, New York, etc."
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">Education</label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <GraduationCap className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        {...register('education')}
                        className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md py-2 px-3 border"
                        placeholder="BSc Computer Science"
                      />
                    </div>
                  </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700">Certifications</label>
                <div className="mt-1">
                  <input
                    type="text"
                    {...register('certifications')}
                    className="focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3 border"
                    placeholder="AWS Certified Developer, etc."
                  />
                </div>
              </div>

            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
              >
                Find Matched Jobs
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
