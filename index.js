function ex5() {
    var n = +document.getElementById("txt-number").value;
    var dem = 0;
    var result = "";
    if (n >= 2) {
        for (var i = 2; i <= n; i++) {
            dem = 0;
            for (var j = 2; j <= i / 2; j++) {
                if (i % j === 0) {
                    dem++;
                }
            }
            if (dem < 1) {
                result += " " + i;
                document.getElementById("lab-result").innerHTML = result;
            }
        }
    }
    else {
        document.getElementById("lab-result").innerHTML = "không có số nguyên tố nào";
    }
}