import { Dictionary } from "../chapter8/Dictionary/Dictionary";

export class Graph{
    private isDirect: boolean
    private vertices: (string | number)[]
    private adjList: Dictionary<string | number, (string | number)[]>
    constructor(isDirect: boolean){
        this.isDirect = isDirect
        this.vertices = []
        this.adjList = new Dictionary()
    }  

    addVertex(vertice: string | number): void{
        if(!this.vertices.includes(vertice)){
            this.vertices.push(vertice)
            this.adjList.setKey(vertice, [])
        }
    }
    addEdge(vertice: string | number, otherVertice: string | string): void{
        if(!this.vertices.includes(vertice)){
            this.addVertex(vertice)
        }
        if(!this.vertices.includes(otherVertice)){
            this.addVertex(otherVertice)
        }
        this.adjList.get(vertice)!.push(otherVertice)
        if(!this.isDirect){
            this.adjList.get(otherVertice)?.push(vertice)
        }
    }
    getVertices(): (string | number)[]{
      return this.vertices  
    }
    getAdjList(): Dictionary<string | number, (string | number)[]>{
        return this.adjList
    }
    toString(): string {
        let s = ''
        for (let i = 0; i < this.vertices.length; i++) {
          s += this.vertices[i] + ' -> '
          const neighbors = this.adjList.get(this.vertices[i]);
          for (let j = 0; j < neighbors!.length; j++) {
            s += neighbors![j] + ' '
          }
          s += '\n'
        }
        return s
      }
}