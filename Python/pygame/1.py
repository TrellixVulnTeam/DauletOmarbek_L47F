import pygame
pygame.init()
size = (400, 500)
screen = pygame.display.set_mode(size)
pygame.display.set_caption("PyGame example")
done = False
while not done:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            done = True
    screen.fill((255, 255, 255))
    pygame.draw.line(screen, (0, 0, 0), [0,0], [100, 100], 5)

pygame.QUIT()