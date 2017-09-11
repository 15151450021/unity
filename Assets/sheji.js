#pragma strict

function Start () {

}
var speed:int=5;
var newobject:Transform;
function Update () {
	var x:float=Input.GetAxis("Horizontal")*Time.deltaTime*speed;
	var z:float=Input.GetAxis("Vertical")*Time.deltaTime*speed;
	transform.Translate(x,0,z);
	if(Input.GetButtonDown("Fire1")){
		var n:Transform=Instantiate(newobject,transform.position,transform.rotation);
		
		var fwd:Vector3=transform.TransformDirection(Vector3.forward);
		n.rigidbody.AddForce(fwd*5000);
		
		
	}	


}