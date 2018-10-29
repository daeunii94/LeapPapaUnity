#pragma strict

var force = 1.0f;
function OnCollisionEnter(coll: Collision) {
    var inNormal = Vector3.Normalize(transform.position - coll.collider.gameObject.transform.position);

    var bounceVector = Vector3.Reflect(coll.relativeVelocity, inNormal);

    coll.collider.gameObject.GetComponent.<Rigidbody>().AddForce(bounceVector * force, ForceMode.VelocityChange);
    

    
    if (coll.collider.tag == "FLOOR") {
        gameObject.GetComponent.<Collider>().isTrigger = true;
        
    }
    
    
}

function SetCollision(flag: boolean) {

    GetComponent.<Rigidbody>().constraints = RigidbodyConstraints.None;
    
    yield WaitForSeconds(0.000000001);

    Destroy(gameObject);

    jsGameManager.state = STATE.COUNT;

}

