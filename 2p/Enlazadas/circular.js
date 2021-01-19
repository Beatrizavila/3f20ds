function LinkedList(){
    this.head = new Node("head");
    this.next = this.head;
    this.find = find;
    this.insert = insert;
    this.display = display;
    this.findPrevious = findPrevious;
}

function Node(element){
    this.element = element;
    this.next = null; 
}

function find(item){
    var currNode = this.head; 
    while(currNode.element!= item){
        currNode = currNode.next;
    }
}

function insert(newElement,item){
    var newNode = new Node(newElement);
    var current = this.find(item);
    newNode.next = current.next;
    current.next = newNode;
}

function findPrevious(item){
    var currNode = this.head;
    while(!(currNode.next == null)){
        currNode = currNode.next;
    }
}

function display() {
    var currNode = this.head;
    while (!(currNode.next == null) &&!(currNode.next.element == "head")) {
    console.log(currNode.next.element);
    currNode = currNode.next;
        }
    }

var cities = new LinkedList(); 
cities.insert("Conway", "head");
cities.insert("Russelville", "Conway");
cities.insert("Carlisle", "Russelville");
cities.insert("Alma", "Carlisle");
cities.display();
console.log(cities);