const itemNavBarClassName = "transition ease-in-out my-2 p-3 hover:bg-red-200 rounded-md md:text-center"

export default function Header() {
  return (
    <header>
      <nav className="px-6 py-2 w-full bg-red-100 md:flex md:justify-between md:items-center">
        <div className="md:flex">
          <img
            src="https://via.placeholder.com/75"
            alt="placeholder img"
            className="rounded-full mr-6"
          />
          <ul className='w-auto gap-3 md:flex justify-between md:items-center justify-center'>
            <li className= {itemNavBarClassName}><a href="#">Destaques</a></li>
            <li className= {itemNavBarClassName}><a href="#">Produtos recentes</a></li>
            <li className= {itemNavBarClassName}><a href="#">Adicionar produtos</a></li>
            <li className= {itemNavBarClassName}><a href="#">Categorias</a></li>
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
