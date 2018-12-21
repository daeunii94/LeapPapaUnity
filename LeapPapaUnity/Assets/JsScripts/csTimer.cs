using UnityEngine.UI;
using UnityEngine;
using System.Collections;


public class csTimer : MonoBehaviour {
    // private jsGameManager jsGameManager;
    public Text timeLabel;
    public float timeCount = 0;

    void Awake() {
        timeCount = 15;
    }
    void Update() {
        if(timeCount > 0) {
            timeCount -= Time.deltaTime;
            timeLabel.text = "TIME:" + string.Format("{0:N0}", timeCount);
        }
        // if(timeCount < 0) {
        //     jsGameManager.state = STATE.HIT; 
	
        // }


    }
}