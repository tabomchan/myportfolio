import random



num = random.randint(1, 25)
guess = None

while guess != num:
    guess = input("adivinhe um numero entre 1 a 25>")
    guess = int(guess)

    if guess == num:
        print("você acertou!!")
        break
    else:
        print("não, tente denovo")


