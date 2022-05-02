class Node{
	
	constructor(value){
		this.value=value;
		this.right=null;
		this.left=null;
	}
	
} 

let tables = [76,72,65 ,98,79,46,90,100];
let node = null;
let nodeStart;
let nodeList = [];
for(let i = 0 ; i < tables.length ; i++){
	
	//add new 
	
	if(i==0){
		nodeStart = new Node(tables[i]);//start node
		node = nodeStart;//node iterator
		nodeList.push(nodeStart);
	}else{
		//Node Iteration
		//choose between left or right
		while(true){
		
			if(tables[i]<node.value){
				//left
				if(node.left){
					//go to next node
					node = node.left;
				}else{
					//create new node
					node.left = new Node(tables[i]);
					//nodeList.push(node.left);
					break;
				}
			}else{
				//right
				if(node.right){
					//go to next node
					node = node.right;
				}else{
					//create new node
					node.right = new Node(tables[i]);
					//nodeList.push(node.right);
					break;
				}
		}
		
		
	}
	node = nodeStart;
	
}
}
console.log("Display node Result...\n---------");
console.log(nodeList);
console.log("preorder...\n---------");
let preorder = [];
let left = [];
let right = [];
//root-left-right
node = nodeList[0];
while(true){
	
	if(node.left){
		left.push(node.left.value);
		node = node.left;
	}else{
		break;
	}
	
}
node = nodeList[0];
while(true){
	
	if(node.right){
		right.push(node.right.value);
		node = node.right;
	}else{
		break;
	}
	
}
preorder.push(nodeList[0].value);
preorder = preorder.concat(left);
preorder = preorder.concat(right);
console.log(preorder.join(" "));

console.log("\ninorder...\n---------");
let inorder = [];
inorder = inorder.concat(left.reverse());
inorder.push(nodeList[0].value);
inorder = inorder.concat(right.reverse());
console.log(inorder.join(" "));

console.log("\npost order...\n---------");
let postorder =[];
postorder = postorder.concat(left);
postorder = postorder.concat(right);
postorder.push(nodeList[0].value);
console.log(postorder.join(" "));

console.log("\nlevel order...\n---------");

