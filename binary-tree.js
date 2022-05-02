var inputs = "33 4 32 52 45 60 87 22 55 74".split(" ");
var n = inputs.length;
var root = -1;
var parent = -1;
var listnode = [];
for(let i = 0 ; i < n ; i++){
	
	var vi = parseInt(inputs[i]);
	if(i === 0){
		root = inputs[i];
		nodestart = new Node(inputs[i]);
		nextnode = nodestart;
		listnode.push(parent);
	}else{
		for(let j = 0;j<listnode.length;j++){
			
			if(vi > nextnode.value){
				if(!parent.right){
					parent.right = new Node(vi);
					listnode.push(parent.right);
					j = 0;
					
				}else{
					nextnode = parent.right
				}  
			}else{
				
				if(!parent.left){
					parent.left = new Node(vi);
					listnode.push(parent.left);
					j = 0;
					
				}else{
					nextnode = parent.left
				}
				
			}
			
			
		}
		
		
	}
	
	
	
}

class Node{
	
	constructor(value){
		this.left = null;
		this.right=null;
		this.next = null;
		this.value = value;
	}
	
}

