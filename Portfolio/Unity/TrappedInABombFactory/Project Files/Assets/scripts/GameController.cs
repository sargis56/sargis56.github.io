using System.Collections;
using System.Collections.Generic;
using System;
using UnityEngine;

public class GameController : MonoBehaviour {

    public TextMesh gameOverText;
    public TextMesh optionsText;
    public TextMesh timeText;

    public AudioClip deathSound;
    public AudioClip bombSound;
    public AudioClip splashSound;
    public AudioClip lavaSplashSound;
    public AudioClip laserSound;
    public AudioClip backgroundSound;

    public GameObject player;
    public float playerX;
    private bool gameOver;

    AudioSource deathSource;
    AudioSource bombSource;
    AudioSource splashSource;
    AudioSource lavaSplashSource;
    AudioSource laserSource;
    AudioSource backgroundSource;

    public GameObject laserGate;

    bool InstantiateLaserGate;

    int timer = 0;

    // Use this for initialization
    void Start () {
        gameOverText.text = "";
        optionsText.text = "";
        deathSource = GetComponent<AudioSource>();
        bombSource = GetComponent<AudioSource>();
        splashSource = GetComponent<AudioSource>();
        lavaSplashSource = GetComponent<AudioSource>();
        laserSource = GetComponent<AudioSource>();
        backgroundSource = GetComponent<AudioSource>();
        backgroundSource.PlayOneShot(backgroundSound);
        backgroundSource.Play();
        InstantiateLaserGate = true;
    }
	
	// Update is called once per frame
	void Update () {
        timeText.text = "Playthrough Time: " + TimeSpan.FromSeconds(timer).ToString();

        if (gameOver == true && Input.GetKey(KeyCode.Escape))
        {
            Application.Quit();
        }
        if (gameOver == true && Input.GetKey(KeyCode.R)) 
        {
            Application.LoadLevel(Application.loadedLevel);
        }

        if (gameOver != true)
        {
            timer++;
        }

        if ((player != null) && (InstantiateLaserGate))
        {
            if (player.GetComponent<Rigidbody2D>().position.x >= 50)
            {
                Instantiate(laserGate, new Vector3(48.73f, -2.98f, 0), laserGate.GetComponent<Rigidbody2D>().transform.rotation);
                InstantiateLaserGate = false;
            }
        }


}

    void OnTriggerEnter2D(Collider2D other)
    {
        if (other.tag == "Bomb")
        {
            bombSource.PlayOneShot(bombSound);
            bombSource.Play();
        }
    }

    public void GameOver(GameObject deathBy)
    {
        if (deathBy.tag == "Bomb")
        {
            bombSource.PlayOneShot(bombSound);
            bombSource.Play();
        }
        if (deathBy.tag == "Water")
        {
            splashSource.PlayOneShot(splashSound);
            splashSource.Play();
        }
        if (deathBy.tag == "Lava")
        {
            lavaSplashSource.PlayOneShot(lavaSplashSound);
            lavaSplashSource.Play();
        }
        if (deathBy.tag == "Laser")
        {
            laserSource.PlayOneShot(laserSound);
            laserSource.Play();
        }

        deathSource.PlayOneShot(deathSound);
        deathSource.Play();
        gameOverText.text = "Game Over";
        optionsText.text = "Press \"R\" to restart	Press Escape to exit";
        gameOver = true;
    }

    public void BombFail()
    {
        bombSource.PlayOneShot(bombSound);
        bombSource.Play();
    }

    public void Win()
    {
        gameOverText.text = "You Win!";
        optionsText.text = "Press \"R\" to restart	Press Escape to exit";
        gameOver = true;
    }

}
