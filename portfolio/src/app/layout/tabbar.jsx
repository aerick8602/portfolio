'use client'
import Tab from '../components/tab';
import '../styles/tabbar.css';

const TabBar = ({ fileData }) => {

    // Function to log the file data
    const ok = () => {
        console.log("Active Files: ", fileData);
    };

    return (
        <div className="tabbar">
            {/* <button onClick={ok}>Show Active Files</button> */}
            {fileData.map((file) => {
                return <Tab key={file.id} file={file} filecount={fileData.length} />;
            })}
        </div>
    );
};

export default TabBar;
