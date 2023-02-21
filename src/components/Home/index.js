import FormProduct from '../itens/createItem'
import ShowLists from '../listas/getListas/'
import DescribeList from '../listas/describeList'
import Lista from '../listas/index'
import Menu from '../menu'
import '../../style.css'

function App() {
  return (
    <div className="font-link" style={{
      margin: 30
    }}>
        <ShowLists />
    </div>
  );
}

export default App;
