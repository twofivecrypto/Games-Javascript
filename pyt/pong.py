import pygame
import sys

pygame.init()

WIDTH, HEIGHT = 800, 480
WINDOW_SIZE = (WIDTH, HEIGHT)
WINDOW_TITLE = "One-Player Pong"

screen = pygame.display.set_mode(WINDOW_SIZE)
pygame.display.set_caption(WINDOW_TITLE)

paddle_width, paddle_height = 10, 100
paddle_x, paddle_y = 10, HEIGHT // 2 - paddle_height // 2
paddle_speed = .5

ball_radius = 20
ball_color = (255, 0, 0)
ball_width, ball_height = 10, 10
ball_x, ball_y = WIDTH // 2 - ball_width // 2, HEIGHT // 2 - ball_height // 2
ball_speed_x, ball_speed_y = 3, 3


running = True
while running:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False
        
    screen.fill((0, 0, 0))
    
    keys = pygame.key.get_pressed()
    if keys[pygame.K_UP] and paddle_y > 0:
        paddle_y -= paddle_speed
    if keys[pygame.K_DOWN] and paddle_y < HEIGHT - paddle_height:
        paddle_y += paddle_speed
        
    ball_x += ball_speed_x
    ball_y += ball_speed_y
    
    if ball_y <= 0 or ball_y >= HEIGHT - ball_height:
        ball_speed_y = -ball_speed_y
        
    if (
        ball_x <= paddle_x + paddle_width 
        and paddle_y <= ball_y <= paddle_y + paddle_height  # Corrected this line
    ):
        ball_speed_x = -ball_speed_x  # Corrected this line
        
    if ball_x < 0:
        running = False
        
    pygame.draw.rect(screen, (255, 255, 255), (paddle_x, paddle_y, paddle_width, paddle_height))
    pygame.draw.ellipse(screen, ball_color, (ball_x - ball_radius, ball_y - ball_radius, ball_radius * 2, ball_radius * 2))
    # Update the display
    pygame.display.update()

# Quit Pygame
pygame.quit()
