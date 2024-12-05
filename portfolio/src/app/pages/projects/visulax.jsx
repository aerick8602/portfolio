import '../../styles/visulax.css';

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
          {'<'}{"!DOCTYPE"} <span style={{ color: '#ff8976' }}>VISULAX</span>{'>'}
          <br />
          {'<'}html lang="en"{'>'}
          <br />
          {'<'}head{'>'}
          <br />
          {'  '}{'  '}{'<'}meta charset="UTF-8"{'>'}
          <br />
          {'  '}{'  '}{'<'}title{'>'}<span style={{ color: '#ff8976' }}>{'  '}Visulax: The Ultimate Algorithm Visualization Platform{'  '}</span>{'<'}/title{'>'}
          <br />
          {'  '}{'  '}{'<'}link rel="<span style={{ color: '#ff8976' }}>live</span>"{'  '}href="<span style={{ color: '#76d3ff' }}><a style={{textDecoration:'underline'}} href='https://visulax2.netlify.app/' target="_blank">https://visulax2.netlify.app/</a></span>"{'>'}
          <br />
          <span>{'<'}/head{'>'}</span>
          <br />
          <span>{'<'}body{'>'}</span>
          <br />
          {'  '}{'  '}{'<'}h2{'>'}<span style={{ color: 'white' }}>Overview</span>{'<'}/h2{'>'}
          <br />
          {'  '}{'  '}{'<'}p{'>'}<span style={{ color: '#4eda7f'}}>Visulax is an immersive platform that transforms complex algorithms into interactive visualizations.<br/>{'  '}{'  '}{'  '}Designed for students, educators, and enthusiasts, it offers a dynamic way to explore  and understand <br/>{'  '}{'  '}{'  '}algorithms  like sorting, searching, graphs, and more.</span><br/>{'  '}{'  '}{'<'}/p{'>'}
          <br />
          {'  '}{'  '}{'<'}p{'>'}<span style={{ color: '#4eda7f' }}>With advanced features like user authentication and responsive design, Visulax provides a seamless, secure, <br/>{'  '}{'  '}{'  '}{'  '} and engaging user experience across all devices.</span><br/>{'  '}{'  '}{'<'}/p{'>'}
          <br />
          {'  '}{'  '}{'<'}h2{'>'}<span style={{ color: 'white' }}>Features</span>{'<'}/h2{'>'}
          <br />
          {'  '}{'  '}{'<'}ul{'>'}
          <br />
          {'  '}{'  '}{'  '}{'  '}{'<'}li{'>'}<span style={{ color: '#4eda7f' }}>Sorting Algorithms: Bubble Sort, Selection Sort, Heap Sort, Insertion Sort, Merge Sort, Quick Sort.</span>{'<'}/li{'>'}
          <br />
          {'  '}{'  '}{'  '}{'  '}{'<'}li{'>'}<span style={{ color: '#4eda7f' }}>Searching Algorithms: Linear Search, Binary Search, Jump Search, Exponential Search.</span>{'<'}/li{'>'}
          <br />
          {'  '}{'  '}{'  '}{'  '}{'<'}li{'>'}<span style={{ color: '#4eda7f' }}>Tree Algorithms: Binary Tree Visualization.</span>{'<'}/li{'>'}
          <br />
          {'  '}{'  '}{'  '}{'  '}{'<'}li{'>'}<span style={{ color: '#4eda7f' }}>Prime Number Algorithms: Sieve of Eratosthenes.</span>{'<'}/li{'>'}
          <br />
          {'  '}{'  '}{'  '}{'  '}{'<'}li{'>'}<span style={{ color: '#4eda7f' }}>Recursion Algorithms: N Queen Problem, Rat in a Maze.</span>{'<'}/li{'>'}
          <br />
          {'  '}{'  '}{'  '}{'  '}{'<'}li{'>'}<span style={{ color: '#4eda7f' }}>Graph Algorithms: Depth First Search (DFS), Breadth First Search (BFS).</span>{'<'}/li{'>'}
          <br />
          {'  '}{'  '}{'<'}/ul{'>'}
          <br />
          {'  '}{'  '}{'<'}h2{'>'}<span style={{ color: 'white' }}>Usage</span>{'<'}/h2{'>'}
          <br />
          {'  '}{'  '}{'<'}p{'>'}<span style={{ color: '#4eda7f' }}>Navigate through various algorithm visualizations using the main page links.</span>{'<'}/p{'>'}
          <br />
          {'  '}{'  '}{'<'}p{'>'}<span style={{ color: '#4eda7f' }}>Follow instructions to see the algorithms unfold in real-time.</span>{'<'}/p{'>'}
          <br />
          {'  '}{'  '}{'<'}p{'>'}<span style={{ color: '#4eda7f' }}>Ideal for students, educators, and algorithm enthusiasts.</span>{'<'}/p{'>'}
          <br />
          {'  '}{'  '}{'<'}h2{'>'}<span style={{ color: 'white' }}>Technologies Used</span>{'<'}/h2{'>'}
          <br />
          {'  '}{'  '}{'<'}ul{'>'}
          <br />
          {'  '}{'  '}{'  '}{'  '}{'<'}li{'>'}<span style={{ color: '#76d3ff' }}>HTML</span>{'<'}/li{'>'}
          <br />
          {'  '}{'  '}{'  '}{'  '}{'<'}li{'>'}<span style={{ color: '#76d3ff' }}>CSS</span>{'<'}/li{'>'}
          <br />
          {'  '}{'  '}{'  '}{'  '}{'<'}li{'>'}<span style={{ color: '#76d3ff' }}>JavaScript</span>{'<'}/li{'>'}
          <br />
          {'  '}{'  '}{'  '}{'  '}{'<'}li{'>'}<span style={{ color: '#76d3ff' }}>MongoDB</span>{'<'}/li{'>'}
          <br />
          {'  '}{'  '}{'  '}{'  '}{'<'}li{'>'}<span style={{ color: '#76d3ff' }}>Axios</span>{'<'}/li{'>'}
          <br />
          {'  '}{'  '}{'  '}{'  '}{'<'}li{'>'}<span style={{ color: '#76d3ff' }}>Zod</span>{'<'}/li{'>'}
          <br />
          {'  '}{'  '}{'  '}{'  '}{'<'}li{'>'}<span style={{ color: '#76d3ff' }}>bcrypt</span>{'<'}/li{'>'}
          <br />
          {'  '}{'  '}{'  '}{'  '}{'<'}li{'>'}<span style={{ color: '#76d3ff' }}>Express.js</span>{'<'}/li{'>'}
          <br />
          {'  '}{'  '}{'<'}/ul{'>'}
          {'<'}/body{'>'}
          <br />
          {'<'}<span style={{ color: '#ff8976' }}>/VISULAX</span>{'>'}
          <br />
        </code>
      </pre>
    </div>
  );
};

export default Visulax;
