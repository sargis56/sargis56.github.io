using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlayerControler : MonoBehaviour {

    // Public fields
    public float speed;
    public bool grounded = true;
	public float velocity;
    // Private fields
    private Rigidbody2D rb;

    bool faceRight;
    bool faceLeft;

    // Initialize our variables
    void Start()
    {
        rb = GetComponent<Rigidbody2D>();
        GetComponent<Animator>().SetBool("StandRight", true);
        GetComponent<Animator>().SetBool("MoveLeft", false);
        GetComponent<Animator>().SetBool("MoveRight", false);
        faceRight = true;
    }

    void Update()
    {
		velocity = rb.velocity.y;
		if (!grounded && velocity == 0)
        {
            grounded = true;
        }
        if (Input.GetKey(KeyCode.Space) && grounded == true)
        {
            rb.AddForce(new Vector3(0, 7, 0), ForceMode2D.Impulse);
            grounded = false;
        }
    }

    // When using physics
    void FixedUpdate()
    {
        if (Input.GetKey(KeyCode.D))
        {
            rb.AddForce(new Vector3(0.25f, 0, 0), ForceMode2D.Impulse);
            GetComponent<Animator>().SetBool("MoveRight", true);
            GetComponent<Animator>().SetBool("MoveLeft", false);
            GetComponent<Animator>().SetBool("StandRight", false);
            faceRight = true;
            faceLeft = false;
        }
        else if (Input.GetKey(KeyCode.A))
        {
			rb.AddForce(new Vector3(-0.25f, 0, 0), ForceMode2D.Impulse);
            GetComponent<Animator>().SetBool("MoveLeft", true);
            GetComponent<Animator>().SetBool("MoveRight", false);
            GetComponent<Animator>().SetBool("StandRight", false);
            faceRight = false;
            faceLeft = true;
        }
        else
        {
            if (faceRight)
            {
                GetComponent<Animator>().SetBool("StandRight", true);
                GetComponent<Animator>().SetBool("MoveLeft", false);
                GetComponent<Animator>().SetBool("MoveRight", false);
            }
            else if (faceLeft)
            {
                GetComponent<Animator>().SetBool("StandLeft", true);
                GetComponent<Animator>().SetBool("MoveLeft", false);
                GetComponent<Animator>().SetBool("MoveRight", false);
            }
        }

    }
}
