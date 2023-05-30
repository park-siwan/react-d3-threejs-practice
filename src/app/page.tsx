import D3Chart from './D3Chart';
import D3Test from './D3Test';
import SvgTest from './Svgtest';

export default function Home() {
  return (
    <main className=''>
      <h1>D3 스터디</h1>
      {/* <D3Chart /> */}
      <D3Test />
      <SvgTest />
    </main>
  );
}
