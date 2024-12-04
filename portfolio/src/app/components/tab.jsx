import { useDispatch } from 'react-redux';
import { removeFile, setActiveFile } from '../toolkit/fileslice';
import '../styles/tab.css';

const Tab = ({ file, filecount }) => {
  const dispatch = useDispatch();

  const handleRemoveFile = () => {
    dispatch(removeFile({ id: file.id })); 
  };

  const handleSelectedFile = () => {
    dispatch(setActiveFile({ id: file.id }));
  };

  return (
    <div 
      className="tab" 
      style={{
        width: `${100/filecount}%`, 
        minWidth: `${100/6}%`,
        backgroundColor: file.isactive ? '#1E1E1E' : '#2D2D2D',
      }}

    >
      <div className="title" onClick={handleSelectedFile}>
        <div className="fileicon">
        {file.name==="Welcome"?<img src={file.icon} width={21} alt={file.name} />:<img src={file.icon} width={17} alt={file.name} />}
        </div>
        <div className="filename"   >
        {file.name==="Welcome"?<p>Welcome</p>:<p>{`${file.name}${file.extension}`}</p>}
          {/* <p>{`${file.name}${file.extension}`}</p> */}
        </div>
      </div>
      <div className="closefile" onClick={handleRemoveFile}>
      {/* <img src="/svg/close-svgrepo-com.svg" width={18} alt="close" /> */}
        {file.name==="Welcome"?<img></img>:<img src="/svg/close-svgrepo-com.svg" width={18} alt="close" />}
      </div>
    </div>
  );
};

export default Tab;
