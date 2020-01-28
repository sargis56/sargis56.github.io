using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlatformMover : MonoBehaviour {

    private Rigidbody2D rb;
    public double moveUp;
    public double moveDown;

    //The speed of the player
    public int speed = 1;

    void Start()
    {
        rb = GetComponent<Rigidbody2D>();
    }

    // Update is called once per frame
    void Update () {
        if (rb.position.y < moveDown) //- 1.34)
        {
            rb.velocity = new Vector2(0, speed);
        }
        else if (rb.position.y > moveUp) //0.76)
        {
            rb.velocity = new Vector2(0, speed * -1);
        }
    }
}
