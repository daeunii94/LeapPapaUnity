#pragma strict

var hit = 1;
var force = 1.0f;
function OnCollisionEnter(coll: Collision) {

    // var block = GameObject.FindWithTag("Block1") ;
    // var audio : AudioSource;
    // audio = block.gameObject.GetComponent(AudioSource);
    // audio.Play();

    var audio : AudioSource;
    audio = gameObject.GetComponent(AudioSource);
    audio.Play();

    var inNormal = Vector3.Normalize(transform.position - coll.collider.gameObject.transform.position);

    var bounceVector = Vector3.Reflect(coll.relativeVelocity, inNormal);

    //coll.collider.gameObject.GetComponent.<Rigidbody>().AddForce(bounceVector * force, ForceMode.VelocityChange);

    if (coll.collider.tag == "FLOOR") {
        gameObject.GetComponent.<Collider>().isTrigger = true;
        
    }


}

function SetCollision(flag: boolean) {

    GetComponent.<Rigidbody>().constraints = RigidbodyConstraints.None;
    
    //yield WaitForSeconds(0.0001);

    yield WaitForSeconds(0.5);
    Destroy(gameObject);

        

    // if (jsGameManager.state != STATE.DEMO) 
	// 	hit--;
	// if (flag == true) 
	// 	hit = -1;
	
	//if (hit >= 0) {
		jsGameManager.state = STATE.HIT; 
	
	//}
    //jsGameManager.state = STATE.COUNT;

}

