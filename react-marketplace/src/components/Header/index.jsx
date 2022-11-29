const itemNavBarClassName = "transition ease-in-out p-3 hover:bg-red-200 rounded-md"

export default function Header() {
  return (
    <header>
      <nav className="px-6 py-2 w-full bg-red-100 flex justify-between items-center">
        <div className="flex">
          <img
            src="https://via.placeholder.com/75"
            alt="placeholder img"
            className="rounded-full mr-6"
          />
          <ul className='w-auto gap-6 md:flex justify-between md:items-center justify-center'>
            <li><a className= {itemNavBarClassName} href="#">Destaques</a></li>
            <li><a className= {itemNavBarClassName} href="#">Produtos recentes</a></li>
            <li><a className= {itemNavBarClassName} href="#">Adicionar produtos</a></li>
            <li><a className= {itemNavBarClassName} href="#">Categorias</a></li>
          </ul>
        </div>
        <img
          src="https://via.placeholder.com/50"
          alt="placeholder img"
          className="rounded-full" 
        />
      </nav>
    </header>
  );
}
