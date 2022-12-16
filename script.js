function escolhaAbastecimento(e) {

    let select = document.querySelector('#opcSelect');

    let value = select.options[select.selectedIndex].text;

    if (value == "Escolha as opções abaixo") {

        // A primeira opção é invalida

        document.getElementById('invalido').style.display = "block";
        document.getElementById('alcool').style.display = "none";
        document.getElementById('gasolina').style.display = "none";

    } else if (value == "Gasolina") {

        // Caso a opção seleciona seja Gasolina

        document.getElementById('invalido').style.display = "none";
        document.getElementById('alcool').style.display = "none";
        document.getElementById('gasolina').style.display = "block";

        calculoGasolina(e)

    } else {
        // Caso a opção seleciona seja Álcool

        document.getElementById('invalido').style.display = "none";
        document.getElementById('alcool').style.display = "block";
        document.getElementById('gasolina').style.display = "none";

        calculoAlcool(e);
    }


}

function calculoGasolina() {

    // Pegando a quantidade de litros da gasolina

    let litroGasolina = parseFloat(document.getElementById("litroGasolina").value);
    let precoGasolina = 3.30;
    let resultado;

    if (litroGasolina <= 20) {


        resultado = (precoGasolina * (litroGasolina * (1 - 4 / 100)));
        valorGasolina.value = resultado.toFixed(2);

    } else if (litroGasolina > 20) {

        resultado = (precoGasolina * (litroGasolina * (1 - 6 / 100)));

        valorGasolina.value = resultado.toFixed(2);
    }

}

function calculoAlcool() {

    // Pegando a quantidade de litros do Álcool

    let litroAlcool = parseFloat(document.getElementById("litroAlcool").value);
    let precoAlcool = 2.90;
    let resultado;

    if (litroAlcool <= 20) {


        resultado = (precoAlcool * (litroAlcool * (1 - 3 / 100)));

        valorAlcool.value = resultado.toFixed(2);

    } else if (litroAlcool > 20) {

        resultado = (precoAlcool * (litroAlcool * (1 - 5 / 100)));

        valorAlcool.value = resultado.toFixed(2);
    }
}