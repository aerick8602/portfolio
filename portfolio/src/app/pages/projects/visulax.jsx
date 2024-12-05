import '../../styles/project/visulax.css';

const Visulax = () => {
  const rows = Array.from({ length: 50 }, (_, index) => index + 1);
  return (
    <div className="about">
      <code className="row">
        {rows.map((row) => (
          <p key={row}>{row}</p>
        ))}
      </code>

      <pre className='visulax'>
        <code>
          {/* Breaking the template into JSX for customization */}
          &lt;!DOCTYPE <span style={{ color: '#ff8976' }}>VISULAX</span>&gt;
          <br />
          &lt;html lang="en"&gt;
          <br />
          &lt;head&gt;
          <br />
          &nbsp;&nbsp;&lt;meta charset="UTF-8"&gt;
          <br />
          &nbsp;&nbsp;&lt;title&gt;<span style={{ color: '#ff8976' }}>&nbsp;Visulax: The Ultimate Algorithm Visualization Platform&nbsp;</span>&lt;/title&gt;
          <br />
          &nbsp;&nbsp;&lt;link rel="<span style={{ color: '#ff8976' }}>live</span>"&nbsp;href="<span style={{ color: '#76d3ff' }}><a style={{textDecoration:'underline'}} href='https://visulax2.netlify.app/' target="_blank">https://visulax2.netlify.app/</a></span>"&gt;
          <br />
          <span>&lt;/head&gt;</span>
          <br />
          <span>&lt;body&gt;</span>
          <br />
          &nbsp;&nbsp;&lt;h2&gt;<span style={{ color: 'white' }}>Overview</span>&lt;/h2&gt;
          <br />
          &nbsp;&nbsp;&lt;p&gt;<span style={{ color: '#4eda7f'}}>Visulax is an immersive platform that transforms complex algorithms into interactive visualizations.<br/>&nbsp;&nbsp;&nbsp;&nbsp; Designed for students, educators, and enthusiasts, it offers a dynamic way to explore  and understand <br/>&nbsp;&nbsp;&nbsp;&nbsp; algorithms  like sorting, searching, graphs, and more.</span><br/>&nbsp;&nbsp;&lt;/p&gt;
          <br />
          &nbsp;&nbsp;&lt;p&gt;<span style={{ color: '#4eda7f' }}>With advanced features like user authentication and responsive design, Visulax provides a seamless, secure, <br/>&nbsp;&nbsp;&nbsp;&nbsp; and engaging user experience across all devices.</span><br/>&nbsp;&nbsp;&lt;/p&gt;
          <br />
          &nbsp;&nbsp;&lt;h2&gt;<span style={{ color: 'white' }}>Features</span>&lt;/h2&gt;
          <br />
          &nbsp;&nbsp;&lt;ul&gt;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;<span style={{ color: '#4eda7f' }}>Sorting Algorithms: Bubble Sort, Selection Sort, Heap Sort, Insertion Sort, Merge Sort, Quick Sort.</span>&lt;/li&gt;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;<span style={{ color: '#4eda7f' }}>Searching Algorithms: Linear Search, Binary Search, Jump Search, Exponential Search.</span>&lt;/li&gt;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;<span style={{ color: '#4eda7f' }}>Tree Algorithms: Binary Tree Visualization.</span>&lt;/li&gt;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;<span style={{ color: '#4eda7f' }}>Prime Number Algorithms: Sieve of Eratosthenes.</span>&lt;/li&gt;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;<span style={{ color: '#4eda7f' }}>Recursion Algorithms: N Queen Problem, Rat in a Maze.</span>&lt;/li&gt;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;<span style={{ color: '#4eda7f' }}>Graph Algorithms: Depth First Search (DFS), Breadth First Search (BFS).</span>&lt;/li&gt;
          <br />
          &nbsp;&nbsp;&lt;/ul&gt;
          <br />
          &nbsp;&nbsp;&lt;h2&gt;<span style={{ color: 'white' }}>Usage</span>&lt;/h2&gt;
          <br />
          &nbsp;&nbsp;&lt;p&gt;<span style={{ color: '#4eda7f' }}>Navigate through various algorithm visualizations using the main page links.</span>&lt;/p&gt;
          <br />
          &nbsp;&nbsp;&lt;p&gt;<span style={{ color: '#4eda7f' }}>Follow instructions to see the algorithms unfold in real-time.</span>&lt;/p&gt;
          <br />
          &nbsp;&nbsp;&lt;p&gt;<span style={{ color: '#4eda7f' }}>Ideal for students, educators, and algorithm enthusiasts.</span>&lt;/p&gt;
          <br />
          &nbsp;&nbsp;&lt;h2&gt;<span style={{ color: 'white' }}>Technologies Used</span>&lt;/h2&gt;
          <br />
          &nbsp;&nbsp;&lt;ul&gt;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;<span style={{ color: '#76d3ff' }}>HTML</span>&lt;/li&gt;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;<span style={{ color: '#76d3ff' }}>CSS</span>&lt;/li&gt;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;<span style={{ color: '#76d3ff' }}>JavaScript</span>&lt;/li&gt;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;<span style={{ color: '#76d3ff' }}>MongoDB</span>&lt;/li&gt;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;<span style={{ color: '#76d3ff' }}>Axios</span>&lt;/li&gt;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;<span style={{ color: '#76d3ff' }}>Zod</span>&lt;/li&gt;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;<span style={{ color: '#76d3ff' }}>bcrypt</span>&lt;/li&gt;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;<span style={{ color: '#76d3ff' }}>Express.js</span>&lt;/li&gt;
          <br />
          &nbsp;&nbsp;&lt;/ul&gt;
          &lt;/body&gt;
          <br />
          &lt;<span style={{ color: '#ff8976' }}>/VISULAX</span>&gt;
          <br />
        </code>
      </pre>
    </div>
  );
};

export default Visulax;
