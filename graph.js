var X = 0;
var Y = 1;

class Graph {
    /*Responsiblity: - Graphs a given set of Data+
                     - Graphs a given line
                     - Draws red squares showing error
                     
    Collaborators: Data
    */

    constructor(data, line) {
        //Enums

        this.data = data;
        this.eqline = line;
        this.xmin = this.getMinDataPoint(X);
        this.ymin = this.getMinDataPoint(Y);
        this.xmax = this.getMaxDataPoint(X);
        this.ymax = this.getMaxDataPoint(Y);

    }

    drawCartesianPlane() {
        //Do Later
    }

    drawDataPoints() {
        var d = this.data.dp;
        for (var i = 0; i < d.length; i++) {
            fill(255, 0, 0);
            circle(d[i][X], d[i][Y], 5);
        }
    }

    drawLine() {
        let l = this.eqline;
        let x = this.xmin;
        let xm = this.xmax;
        line(x, x * l.a + l.b, xm, xm * l.a + l.b);
        //console.log("Line x", x, "y", x * l.a + l.b);
        //line(0, 0, 400, 400);
    }

    drawErrorSquares() {

    }

    draw() {
        this.drawCartesianPlane();
        this.drawDataPoints();
        this.drawLine();
        this.drawErrorSquares();
    }

    setGraphDimensions(xmin, ymin, xmax, ymax) {
        this.xmin = xmin;
        this.ymin = ymin;
        this.xmax = xmax;
        this.ymax = ymax;
    }

    //Returns max value in that col of data
    getMaxDataPoint(col) {
        var max = 0;
        var data = this.data.dp;
        for (var i = 0; i < data.length; i++) {
            if (data[i][col] > max) {
                max = data[i][col];
            }
        }
        return max;
    }

    //Returns min value in that col of data   
    getMinDataPoint(col) {
        var min = 0;
        var data = this.data.dp;
        for (var i = 0; i < data.length; i++) {
            if (data[i][col] < min) {
                min = data[i][col];
            }
        }
        return min;
    }

}