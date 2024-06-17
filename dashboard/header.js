// headerComponent.js
export function loadHeader() {
    const headerHTML = `
        <header>
            <h1><a href="index.html">APPUSER</a></h1>
            <nav>
                <ul>
                    <li><a href="address-form.html">Cadastrar endereço</a></li>
                    <li><a href="address-list.html">Listar endereços</a></li>
                </ul>
            </nav>
        </header>
    `;

    document.body.insertAdjacentHTML('afterbegin', headerHTML);
}
