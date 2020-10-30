class Data {

    constructor(num_entries) {
        //dp = DataPoints
        this.dp = Array(num_entries); //Number of rows in matrix
        for (var i = 0; i < this.dp.length; i++) {
            this.dp[i] = Array(2); //Number of coloumns in matrix
        }
    }

}

class Line {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
}