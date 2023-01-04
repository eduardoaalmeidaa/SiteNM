function busca_cidades() {
    var estado = document.getElementById("cuf").value;
    var lista = document.getElementById("ccidade");
    while (lista.options.length) {
        lista.remove(0);
    }
    if (estado == "AC") {
        acre();
    } else {
        if (estado == "AL") {
            alagoas();
        } else {
            if (estado == "AM") {
                amazonas();
            } else {
                if (estado == "AP") {
                    amapa();
                } else {
                    if (estado == "GO") {
                        goias();
                    }
                }
            }
        }
    }
}



function acre() {
    var cidade = new Option("Rio Branco");
    document.getElementById('ccidade').add(cidade);
    cidade = new Option("Acrelândia");
    document.getElementById('ccidade').add(cidade);
    cidade = new Option("Assis Brasil");
    document.getElementById('ccidade').add(cidade);
    cidade = new Option("Brasiléia");
    document.getElementById('ccidade').add(cidade);
    cidade = new Option("Bujari");
    document.getElementById('ccidade').add(cidade);
}

function goias() {
    var cidade = new Option("Goiânia");
    document.getElementById('ccidade').add(cidade);
    cidade = new Option("Abadia de Goiás");
    document.getElementById('ccidade').add(cidade);
    cidade = new Option("Abadiânia");
    document.getElementById('ccidade').add(cidade);
    cidade = new Option("Acreúna");
    document.getElementById('ccidade').add(cidade);
    cidade = new Option("Adelândia");
    document.getElementById('ccidade').add(cidade);
}

function calc_total() {
    var qtd = parseInt(document.getElementById('crendapes').value);
    if (qtd <= 0) {
        document.getElementById('crendapestotal').value = "Não possuo";
    } else
        if (qtd <= 1212) {
            document.getElementById('crendapestotal').value = "Menos que R$1.212,00";
        } else
            if (qtd <= 3636) {
                document.getElementById('crendapestotal').value = "Entre R$1.212,00 a R$3.636,00";
        } else
            if (qtd <= 5000) {
                document.getElementById('crendapestotal').value = "Entre R$3.636,00 a R$5.000,00";
        } else
            if (qtd <= 10000) {
                document.getElementById('crendapestotal').value = "Entre R$5.000,00 a R$10.000,00";
        } else
            if (qtd <= 15756) {
                document.getElementById('crendapestotal').value = "Entre R$5.000,00 a R$15.756,00";
            } else
            if (qtd <= 18180) {
                document.getElementById('crendapestotal').value = "Entre R$15.756 a R$18.180";
            } else
                if (qtd <= 20604)
                    document.getElementById('crendapestotal').value = "Entre R$ 18.180 a R$20.604";
                    else
                        document.getElementById('crendapestotal').value = "Acima de R$20.604,00";



}



function calc_total2() {
    var qtd2 = parseInt(document.getElementById('crendafam').value);
    if (qtd2 <= 0)
        document.getElementById('crendafamtotal').value = "Não possuo";
    else
        if (qtd2 <= 1212)
            document.getElementById('crendafamtotal').value = "Menos que R$ 1.212,000";
        else
            if (qtd2 <= 3636)
                document.getElementById('crendafamtotal').value = "Entre R$ 1.212,00 a R$3.636, 00";
            else
                if (qtd2 <= 6060)
                    document.getElementById('crendafamtotal').value = "Entre R$ 3.636,00,00 a R$6.060, 00";
                else
                    if (qtd2 <= 8484)
                        document.getElementById('crendafamtotal').value = "Entre R$ 6.060,00 a R$8.484, 00";
                    else
                        if (qtd2 <= 10908)
                            document.getElementById('crendafamtotal').value = "Entre R$ 8.484, 00 a R$ 20.604,00";
                        else
                            if (qtd2 <= 23028)
                                document.getElementById('crendafamtotal').value = "Entre R$ 20.604,00 a R$23.028,00";
                            else
                                if (qtd2 <= 25452)
                                    document.getElementById('crendafamtotal').value = "Entre R$ 23.028,00 a R$25.452,00";
                                else
                                    if (qtd2 <= 27876)
                                        document.getElementById('crendafamtotal').value = "Entre R$ 25.452,000 a R$27.876,00";
                                    else
                                        if (qtd2 <= 30300)
                                            document.getElementById('crendafamtotal').value = "Entre R$ 27.876,00 a R$30.300, 00";
                                        else
                                            document.getElementById('crendafamtotal').value = "Acima de R$ 30.300,00";
}
