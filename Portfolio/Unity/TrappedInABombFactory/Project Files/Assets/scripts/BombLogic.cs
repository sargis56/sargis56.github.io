using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class BombLogic : MonoBehaviour {

    public GameObject explosion_bomb;
    public GameObject fuse_bomb;
    public GameObject death_bomb;
    public GameObject player;

    public int timer = 0;
    bool timmerBool;
    bool timesUp;
    bool playerOnObject;
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
            Instantiate(fuse_bomb, this.transform.position, this.transform.rotation);
            timmerBool = true;
            playerOnObject = true;
        }

    }

    void OnTriggerExit2D(Collider2D other)
    {
        if (other.tag == "Player")
        {
            playerOnObject = false;
        }
            
    }

    private void Update()
    {
        if (timmerBool)
        {
            timer++;

            if (timer == 80)
            {
                Instantiate(explosion_bomb, this.transform.position, this.transform.rotation);
                timesUp = true; 
            }
        }

        if ((timesUp && playerOnObject) && player != null)
        {
            gameController.GameOver(this.gameObject);
            Destroy(player.gameObject);
            Instantiate(death_bomb, player.transform.position, player.transform.rotation);
            Destroy(this.gameObject);
        }
        else if (timesUp)
        {
            gameController.BombFail();
            Destroy(this.gameObject);
        }

    }
}
