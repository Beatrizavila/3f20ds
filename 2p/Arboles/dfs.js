class Graph {
  constructor(v) {
    this.vertices = v;
    this.edges = 0;
    this.adj = [];
    for (let i = 0; i < this.vertices; i++) {
      this.adj[i] = [];
      this.adj[i].push('');
    }
    this.marked = Array(this.vertices).fill(false);
  }

  addEdge(v, w) {
    this.adj[v].push(w);
    this.adj[w].push(v);
    this.edges++;
  }

  showGraph() {
    for (let i = 0; i < this.vertices; ++i) {
      let line = '';
      line += `${i} -> `;
      for (let j = 0; j < this.vertices; ++j) {
        if (this.adj[i][j] != undefined) line += `${this.adj[i][j]} `;
      }
      console.log(line);
    }
  }

  dfs(v) {
    this.marked[v] = true;
    if (this.adj[v] != undefined) {
      console.log(`Visited vertex: ${v}`);
    }
    for (const w in this.adj[v]) {
      if (!this.marked[w]) {
        this.dfs(w);
      }
    }
  }
}

// program to test dfs() function
const g = new Graph(5);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 3);
g.addEdge(2, 4);
g.showGraph();
g.dfs(0);
