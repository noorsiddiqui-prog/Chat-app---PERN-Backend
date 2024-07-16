export const userSocketMap: { [key: string]: string } = {} // {userId: socketId}

export const getReceiverSocketId = (receiverId: string) => {
    return userSocketMap[receiverId];
}

