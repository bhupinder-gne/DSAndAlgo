class MyNode<T> {
    public next: MyNode<T> | null = null;;
    constructor(public data: T){}
}

interface ILinkedList<T>{
    insertAtBegin(data: T): MyNode<T>;
    insertAtEnd(data: T): MyNode<T>;
    deleteNode(node: MyNode<T>): void;
    traverse(): T[];
    search(comparator: (data: T) => boolean): MyNode<T> | null;
}

class TLinkedList<T> implements ILinkedList<T>{
    private head: MyNode<T> | null = null;
    private size:number = 0;

    insertAtBegin(data: T): MyNode<T> {
        const node = new MyNode(data);
        if(!this.head)
            this.head = node;
        else{
            let current = this.head;
            this.head = node;
            this.head.next = current; 
        }
        ++this.size;
        return node;
    }
    insertAtEnd(data: T): MyNode<T> {
        const node = new MyNode(data);
        ++this.size;
        if(!this.head)
            this.head = node;
        else{
            let current = this.head;
            while(current){
                if(!current.next){
                    current.next = node;
                    return node;
                }
                current = current.next
            }
        }
        return node;
    }

    deleteNode(node: MyNode<T>): void {
        if(!this.head)
            throw new Error("List is empty");
        else{
            let current : MyNode<T> | null= this.head;
            let prev : MyNode<T> | null = null;
            while(current){
                if(current.data === node.data){
                    if(prev)
                        prev.next= current.next;
                    else
                        this.head = current.next;
                    this.size--;
                }
                prev =current;
                current = current.next;
            }
        }
    }
    traverse(): T[] {
        const collection : T[] =[];
        if (!this.head) {
            return collection;
        }
        const addNext = (node : MyNode<T>) :T[] => {
            collection.push(node.data);
            return node.next ? addNext(node.next) : collection;
        }
        return addNext(this.head);
    }
    
    search(comparator: (data: T) => boolean): MyNode<T> | null {
       const findItem = (node : MyNode<T>):MyNode<T> | null => {
            if(comparator(node.data))
                return node;
            else
                return node.next ? findItem(node.next) :null;
       }
       return this.head ? findItem(this.head) : null;
    }
    
    getSize(){
        return this.size;
    }
}

const tll = new TLinkedList();

tll.insertAtBegin(50);
tll.insertAtBegin(40);
tll.insertAtBegin(30);
tll.insertAtBegin(20);

console.log(tll.search((d) => d === 20))