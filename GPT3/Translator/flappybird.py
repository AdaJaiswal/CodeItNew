import pygame
import random

# Initialize Pygame
pygame.init()

# Set the window size
WIDTH, HEIGHT = 400, 708

# Create the window
screen = pygame.display.set_mode((WIDTH, HEIGHT))

# Set the title of the window
pygame.display.set_caption("Flappy Bird")

# Load the images
bird_images = [pygame.image.load("bird1.png"), pygame.image.load("bird2.png"), pygame.image.load("bird3.png")]
background_image = pygame.image.load("background.png")
pipe_image = pygame.image.load("pipe.png")

# Class for the bird
class Bird:
    def __init__(self):
        self.x = 100
        self.y = 250
        self.gravity = 0.25
        self.velocity = 0
        self.image = bird_images[0]
        self.index = 0
        self.tick_count = 0
    
    def jump(self):
        self.velocity = -5
        self.tick_count = 0
        self.index = 0
    
    def move(self):
        self.tick_count += 1

        # Apply gravity
        displacement = self.velocity*self.tick_count + 0.5*self.gravity*self.tick_count**2
        self.y = self.y + displacement

        # Change image
        if self.index >= 7:
            self.index = 0
        self.image = bird_images[self.index//3]
        self.index += 1
    
    def draw(self, screen):
        screen.blit(self.image, (self.x, self.y))

# Class for the pipes
class Pipe:
    def __init__(self, x):
        self.x = x
        self.height = 0
        self.gap = 100
        self.top = 0
        self.bottom = 0
        self.PIPE_TOP = pygame.transform.flip(pipe_image, False, True)
        self.PIPE_BOTTOM = pipe_image
        self.passed = False
        self.set_height()
    
    def set_height(self):
        self.height = random.randrange(50, 450)
        self.top = self.height - self.PIPE_TOP.get_height()
        self.bottom = self.height + self.gap
    
    def move(self, velocity):
        self.x -= velocity
    
    def draw(self, screen):
        screen.blit(self.PIPE_TOP, (self.x, self.top))
        screen.blit(self.PIPE_BOTTOM, (self.x, self.bottom))
    
    def collide(self, bird):
        bird_mask = bird.get_mask()
        top_mask = pygame.mask.from_surface(self.PIPE_TOP)
        bottom_mask = pygame.mask.from_surface(self.PIPE_BOTTOM)
