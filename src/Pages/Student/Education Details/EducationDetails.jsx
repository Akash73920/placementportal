import education from "../../../SampleData/EducationDetails";

export default function EducationDetails({ studentEducation }) {
  const EducationCard = ({ title, details }) => (
    <div className="bg-white shadow rounded-lg p-6 mb-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">{title}</h3>
      <div className="space-y-2">
        {Object.entries(details).map(([key, value]) => (
          <p key={key} className="text-sm">
            <span className="font-medium text-gray-600">
              {key.charAt(0).toUpperCase() + key.slice(1)}:
            </span>{" "}
            <span className="text-gray-800">{value}</span>
          </p>
        ))}
      </div>
    </div>
  );

  return (
    <div className="p-4 sm:ml-64 min-h-screen">
      <div className="max-w-4xl mx-auto p-6 bg-gray-50 rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          Education Details
        </h2>

        <EducationCard title="College/University" details={education.college} />
        <EducationCard title="12th Grade" details={education.twelthGrade} />
        <EducationCard title="10th Grade" details={education.tenthGrade} />

        {education.diploma && (
          <EducationCard title="Diploma" details={education.diploma} />
        )}
        {education.masters && (
          <EducationCard title="Masters Degree" details={education.masters} />
        )}
      </div>
    </div>
  );
}
