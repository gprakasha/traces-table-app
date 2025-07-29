import './App.css'
import TraceTable from './components/traceTable/TraceTable.tsx'
import { traces } from './const/dummy_data.ts';

function App() {

  return (
    <TraceTable traces={traces} />
  )
}

export default App
