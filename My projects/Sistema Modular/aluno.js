export function media(n1, n2, n3) {
    return (n1 + n2 + n3) / 3
}

export function situacao(media) {
    if(media >= 7) {
        return 'Aprovado'
    } else {
        return 'Reprovado'
    }
}