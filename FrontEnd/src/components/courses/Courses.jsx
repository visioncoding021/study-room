import sidehome from '../../assets/side-home.jpg';

const Courses = () => {
  const categories = [
    'Web Development',
    'Machine Learning',
    'Game Development',
    'MERN Stack Developer',
    'Java Development',
    'Data Science',
  ];

  return (
    <>
      <div className="text-center my-4">
        <h1 className="text-4xl font-bold mb-6">All Courses</h1>
        <input
          type="text"
          className="px-4 py-2 border rounded mb-6"
          placeholder="Search for courses"
        />
      </div>
      <div className="overflow-x-auto whitespace-nowrap mb-6 py-4">
        <div className="flex space-x-4 justify-center">
          {categories.map((category, index) => (
            <div key={index} className="inline-block">
              <span className="px-4 py-2 bg-blue-600 text-white rounded-lg cursor-pointer hover:bg-blue-700">
                {category}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center px-4">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((x) => (
          <div key={x} className="bg-white shadow-md rounded-lg overflow-hidden max-w-xs">
            <img src={sidehome} alt="Course Thumbnail" className="w-full h-48 object-cover" />
            <div className="p-4">
              <p className="text-2xl font-bold mb-2">Sample Title</p>
              <p className="text-gray-700 mb-2">Sample Author</p>
              <p className="text-gray-600 mb-2">Creator: John Doe</p>
              <p className="text-gray-600 mb-2">Lectures: 2</p>
              <p className="text-gray-600 mb-4">Views: 2</p>
              <div className="flex space-x-4">
                <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
                  Watch Now
                </button>
                <button className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700">
                  Add to Playlist
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Courses;
