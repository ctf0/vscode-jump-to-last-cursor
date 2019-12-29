const vscode = require('vscode')

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

    let disposable = vscode.commands.registerCommand('jumpTo.lastCursor', async () => {
        const editor = vscode.window.activeTextEditor
        const { selections } = editor

        editor.selection = selections[selections.length - 1]
        editor.revealRange(editor.selection, 2)
    })

    context.subscriptions.push(disposable)
}
exports.activate = activate

function deactivate() { }

module.exports = {
    activate,
    deactivate
}
