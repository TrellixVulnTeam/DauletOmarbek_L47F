import pygame, sys, time, random
from pygame.locals import *

pygame.init()

fpsClock = pygame.time.Clock()

playSurface = pygame.display.set_mode((640, 480))
pygame.display.set_caption('Happy Birthday Mum')
redColour = pygame.Color(255, 0, 0)
blackColour = pygame.Color(0, 0, 0)
whiteColour = pygame.Color(255, 255, 255)
greyColour = pygame.Color(150, 150, 150)

game_is_running = True
while game_is_running:
        snakePosition = [100,100]
        snakeSegments = [[100,100],[80,100],[60,100]]
        raspberryPosition = [300,300]
        raspberrySpawned = 1
        direction = 'right'
        changeDirection = direction
        diff = 30

        snake_is_alive = True
        while snake_is_alive:
            for event in pygame.event.get():
                if event.type == QUIT:
                    pygame.quit()
                elif event.type == KEYDOWN:
                    if event.key == K_RIGHT or event.key == ord('d'):
                        changeDirection = 'right'
                    if event.key == K_LEFT or event.key == ord('a'):
                        changeDirection = 'left'
                    if event.key == K_UP or event.key == ord('w'):
                        changeDirection = 'up'
                    if event.key == K_DOWN or event.key == ord('s'):
                        changeDirection = 'down'
                    if event.key == K_ESCAPE:
                        pygame.event.post(pygame.event.Event(QUIT))
                    if event.key == K_1:
                        diff = 10
                    if event.key == K_2:
                        diff = 20
                    if event.key == K_3:
                        diff = 30
                    if event.key == K_4:
                        diff = 40
                    if event.key == K_5:
                        diff = 50
                    if event.key == K_r:
                        snake_is_alive = False

            if changeDirection == 'right' and not direction == 'left':
                direction = changeDirection
            if changeDirection == 'left' and not direction == 'right':
                direction = changeDirection
            if changeDirection == 'up' and not direction == 'down':
                direction = changeDirection
            if changeDirection == 'down' and not direction == 'up':
                direction = changeDirection
            if direction == 'right':
                snakePosition[0] += 20
            if direction == 'left':
                snakePosition[0] -= 20
            if direction == 'up':
                snakePosition[1] -= 20
            if direction == 'down':
                snakePosition[1] += 20
            snakeSegments.insert(0,list(snakePosition))
            if snakePosition[0] == raspberryPosition[0] and snakePosition[1] == raspberryPosition[1]:
                raspberrySpawned = 0
            else:
                snakeSegments.pop()
            if raspberrySpawned == 0:
                x = random.randrange(1,32)
                y = random.randrange(1,24)
                raspberryPosition = [int(x*20),int(y*20)]
            raspberrySpawned = 1
            playSurface.fill(blackColour)
            for position in snakeSegments:
                pygame.draw.rect(playSurface,whiteColour,Rect(position[0], position[1], 20, 20))
            pygame.draw.rect(playSurface,redColour,Rect(raspberryPosition[0], raspberryPosition[1], 20, 20))
            pygame.display.flip()
            if snakePosition[0] > 620 or snakePosition[0] < 0:
                snake_is_alive = False
            if snakePosition[1] > 460 or snakePosition[1] < 0:
                snake_is_alive = False
            for snakeBody in snakeSegments[1:]:
                if snakePosition[0] == snakeBody[0] and snakePosition[1] == snakeBody[1]:
                    snake_is_alive = False
            fpsClock.tick(diff)


        gameOverFont = pygame.font.Font('freesansbold.ttf', 72)
        gameOverSurf = gameOverFont.render('Game Over', True, greyColour)
        gameOverRect = gameOverSurf.get_rect()
        gameOverRect.midtop = (320, 10)
        playSurface.blit(gameOverSurf, gameOverRect)
        pygame.display.flip()
        time.sleep(5)