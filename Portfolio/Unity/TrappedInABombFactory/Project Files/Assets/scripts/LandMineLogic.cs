using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class LandMineLogic : MonoBehaviour {

    public GameObject explosion_bomb;
    public GameObject death_bomb;

    private GameController gameController;

    void Start()
    {
        GameObject gameControllerObject = GameObject.FindWithTag("GameController");

        if (gameControllerObject != null)
        {
            gameController = gameControllerObject.GetComponent<GameController>();
        }

        if (gameController == null)
        {
            Debug.Log("Cannot find Game Controller Object");
        }
    }

    void OnTriggerEnter2D(Collider2D other)
    {
        if (other.tag == "Player")
        {
            gameController.GameOver(this.gameObject);
            Instantiate(death_bomb, other.transform.position, other.transform.rotation);
        }
        
        Instantiate(explosion_bomb, this.transform.position, this.transform.rotation);

        Destroy(other.gameObject);
        Destroy(this.gameObject);
    }
}
