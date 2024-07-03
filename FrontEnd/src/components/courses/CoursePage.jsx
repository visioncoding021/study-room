import { useState } from "react";
import { Link } from "react-router-dom";

const CoursePage = () => {
  const [lectureNo, setLectureNo] = useState(0);
  const lectures = [
    {
      _id: '123',
      title: 'Sample 1',
      description: 'Sample description 1',
      video: {
        url: 'video_url_1'
      }
    },
    {
      _id: '1234',
      title: 'Sample 2',
      description: 'Sample description 2',
      video: {
        url: 'video_url_2'
      }
    },
    {
      _id: '1235',
      title: 'Sample 3',
      description: 'Sample description 3',
      video: {
        url: 'video_url_3'
      }
    }
  ];

  return (
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="w-full md:w-1/2 p-4">
          <video className="w-full" src={lectures[lectureNo].video.url} controls controlsList="nodownload"></video>
          <div className="mt-4">
            <p className="text-lg font-semibold">Title: <span className="text-blue-500">{lectures[lectureNo].title}</span></p>
            <p className="mt-2">{lectures[lectureNo].description}</p>
            <textarea className="mt-4 w-full p-2 border border-gray-300 rounded" placeholder="Add your notes here"></textarea>
          </div>
        </div>
        <div className="w-full md:w-1/2 p-4">
          {lectures.map((lecture, index) => (
            <Link key={lecture._id} to={`/courses/${lecture._id}`}>
              <div className="p-2 border-b border-gray-300 hover:bg-gray-100">
                <p className="text-lg font-semibold">Index {index + 1}: <span className="text-blue-500">{lecture.title}</span></p>
                <p className="mt-1 text-gray-600">{lecture.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CoursePage;
