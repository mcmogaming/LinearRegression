var WD_WIDTH = 400;
var WD_HEIGHT = 400;
var data;
var eqline;
var graph;

function setupDummyData() {
    data = new Data(4);
    data.dp[0] = [140, 250];
    data.dp[1] = [200, 300];
    data.dp[2] = [375, 15];
    data.dp[3] = [45, 95];
}

function setupLine() {
    eqline = new Line(1, 1);
}

function setupGraph() {
    graph = new Graph(data, eqline);
}

function setup() {
    createCanvas(400, 400);
    setupDummyData();
    setupLine();
    setupGraph();
}

function draw() {
    background(203);
    graph.draw();
}

function controls() {
    if (keyIsDown(LEFT_ARROW)) {

    } else if (keyIsDown(RIGHT_ARROW)) {

    }
    if (keyIsDown(UP_ARROW)) {

    }
    if (keyIsDown(DOWN_ARROW)) {

    }

}