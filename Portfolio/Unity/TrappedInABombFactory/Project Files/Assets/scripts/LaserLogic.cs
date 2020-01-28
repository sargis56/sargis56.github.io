using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class LaserLogic : MonoBehaviour {

    public GameObject death_bomb;

    private GameController gameController;

    private Rigidbody2D rb;
    public double moveLeft;
    public double moveRight;

    public int speed = 8;

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

        rb = GetComponent<Rigidbody2D>();
    }

    void OnTriggerEnter2D(Collider2D other)
    {
        if ((other.tag == "Player") && (other.GetComponent<Rigidbody2D>().velocity.x > 1)|| (other.tag == "Player") && (other.GetComponent<Rigidbody2D>().velocity.x < 0))
        {
            gameController.GameOver(this.gameObject);
            Instantiate(death_bomb, other.transform.position, other.transform.rotation);
            Destroy(other.gameObject);
        }
    }

    void Update()
    {
        if (rb.position.x > moveRight)
        {
            //rb.velocity = new Vector2(speed, 0);
            rb.velocity = new Vector2(speed * -1, 0);
        }
        else if (rb.position.x < moveLeft)
        {
            rb.velocity = new Vector2(speed, 0);
            //rb.velocity = new Vector2(speed * -1, 0);
        }
    }
}
