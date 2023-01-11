import tkinter as tk

root = tk.Tk()
root.title("Tic Tac Toe")
board = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
]
buttons = []

for i in range(3):
    button_row = []
    for j in range(3):
        button = tk.Button(root, width=8, height=4)
        button.grid(row=i, column=j)
        button_row.append(button)
    buttons.append(button_row)
def button_clicked(i, j):
    global board, player

    # Do nothing if the space is already taken
    if board[i][j] != 0:
        return

    # Update the board and switch players
    board[i][j] = player
    player = 1 if player == 2 else 2

    # Update the button text
    buttons[i][j]["text"] = "X" if player == 2 else "O"
    buttons[i][j]["disabledforeground"] = "black"

    # Check for a win or draw
    if check_win():
        # Disable all buttons
        for row in buttons:
            for button in row:
                button["state"] = "disabled"
        # Show a message
        tk.Label(root, text="Player {} wins!".format(player)).grid()
    elif check_draw():
        # Disable all buttons
        for row in buttons:
            for button in row:
                button["state"] = "disabled"
        # Show a message
        tk.Label(root, text="It's a draw!").grid()

# Bind the buttons to the button_clicked function
for i in range(3):
    for j in range(3):
        buttons[i][j]["command"] = lambda i=i, j=j: button_clicked(i, j)
