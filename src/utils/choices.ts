import chalk from 'chalk'

export const powerups = [
    `${chalk.red('Attack Damage:')} always hits, always works (${chalk.red('+30% AD')})`,
    `${chalk.blue('Ability Power:')} let\'s blow them up! (${chalk.blue('+30% AP')})`,
    `${chalk.magenta('Mixed damage:')} why not... both? (${chalk.magenta('+15% AP & AD')})`,
    `${chalk.yellow('Resists and HP:')} cause league of tanks (${chalk.yellow('+10% resits & +15% HP')})`,
]

export const actions = [
    `${chalk.red('Attack')}: hits 80-140% AD. Critic 10%. Missing 10%`,
    `${chalk.blue('Magic')}: hits 30-200% AP. Critic 40%. Missing 30%`,
    `${chalk.green('Potion')}: heals 10%-30% of damage recieved`,
]
