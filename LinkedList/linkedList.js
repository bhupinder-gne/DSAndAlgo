class Node {
    constructor(element){
        this.element = element;
        this.next = null;
    }
}

class LinkedList {
    constructor(head = null){
        this.head = head;
        this.size = 0;
    }

    add(element){
        let node = new Node(element);
        let current;

        if(!this.head)
            this.head = node;
        else{
            current = this.head;

            while(current.next)
                current = current.next;

            current.next = node;
        }
        this.size++;
    }

    remove(element){
        if(!this.size)
            return "Linked List is empty";
        else{
            let current =this.head
            let prev;
            while(current){
                if(current.element === element)
                {
                    if(prev)
                        prev.next = current.next;
                    else
                        this.head = current.next;
                    this.size--;
                    return current.element;
                }
                prev= current;
                current = current.next;
            }
        }
    }

    addAt(element, index){
        if(!this.size)
            return "Linked List is empty";
        else{
            const node = new Node(element)
            let current =this.head;
            let prev;
            let count = 0;
            if(index === 0){
              node.next = current;
              this.head = node;
            }
            else{
                while(count <= index){
                    count++;
                    prev = current;
                    current = current.next;
                }
                node.next = current;
                prev.next = node;
            }
                
            this.size++;
        }
    }

    removeAt(index){
        if(!this.size)
            return "Linked List is empty";
        else{
            let current =this.head;
            let prev;
            let count = 0;
            if(index === 0)
              this.head = current.next;
            else{
                while(count <= index){
                    count++;
                    prev = current;
                    current = current.next;
                }
                prev.next = current.next;
            }
            current.next = null;
            return current;
            this.size++;
        }
    }

    indexOf(element){
        let current = this.head;
        let index = 0;
        while(current){
            if(current.element === element)
                return index;

            current = current.next;
            ++index;
        }
        return -1;
    }

    isEmpty(){
        return this.size === 0;
    }

}

const ll = new LinkedList();
ll.add(10);
ll.add(20);
ll.add(30);
ll.add(40);
ll.addAt(5, 0);
ll.addAt(35, 4);
console.log(ll.indexOf(55));