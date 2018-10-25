#pragma strict

function OnCollisionEnter(coll: Collision) {
    if (coll.collider.tag == "BLOCK") {
        coll.collider.isTrigger = true;
        
    }

}

function SetCollision(flag: boolean) {
    
        GetComponent.<Rigidbody>().constraints = RigidbodyConstraints.None;
        Destroy(gameObject, 1.5);
    
}

