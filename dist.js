function euclideanDistance(p1, p2) {
    // Check if they have the same number of dimensions
    if (p1.length != p2.length) {
        throw new Error("Incompatible Points");
    }
    // Initialize square distance
    let sqDist = 0;
    for (let i = 0; i < p1.length; i++) {
        sqDist += (p2[i] - p1[i]) ** 2;
    }
    return sqDist ** 0.5;
}