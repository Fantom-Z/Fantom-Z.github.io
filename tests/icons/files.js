(Scratch => {
  'use strict';

  const icon = 'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIyMjUuMzU0OCIgaGVpZ2h0PSIyMjUuMzU0OCIgdmlld0JveD0iMCwwLDIyNS4zNTQ4LDIyNS4zNTQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTI3LjMyMjkxLC02Ny4zMjI2KSI+PGcgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aXNQYWludGluZ0xheWVyJnF1b3Q7OnRydWV9IiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0xMjcuMzIyOTIsMTgwYzAsLTYyLjIzMDAxIDUwLjQ0NzM5LC0xMTIuNjc3NCAxMTIuNjc3NCwtMTEyLjY3NzRjNjIuMjMwMDEsMCAxMTIuNjc3NCw1MC40NDczOSAxMTIuNjc3NCwxMTIuNjc3NGMwLDYyLjIzMDAxIC01MC40NDczOSwxMTIuNjc3NCAtMTEyLjY3NzQsMTEyLjY3NzRjLTYyLjIzMDAxLDAgLTExMi42Nzc0LC01MC40NDczOSAtMTEyLjY3NzQsLTExMi42Nzc0eiIgZmlsbD0iI2VkYjEyNCIgc3Ryb2tlLXdpZHRoPSIwIi8+PHBhdGggZD0iTTMwMS40NSwxNDkuMjc0OTh2OTIuMTc1YzAsOC40NDkzOCAtNi45MTMxMSwxNS4zNjI1IC0xNS4zNjI1LDE1LjM2MjVoLTkyLjI1MTgxYy04LjQ0OTM5LDAgLTE1LjI4NTY5LC02LjkxMzEyIC0xNS4yODU2OSwtMTUuMzYyNWwwLjA3NjgxLC0xMjIuOWMwLC04LjQ0OTM2IDYuODM2MzEsLTE1LjM2MjUgMTUuMjg1NjgsLTE1LjM2MjVoNjEuNDV6TTI3MC43MjUwNSwyMTAuNzI1aC02MS40NXYxNS4zNjI1aDYxLjQ1ek0yNzAuNzI1MDUsMTgwaC02MS40NXYxNS4zNjI1aDYxLjQ1ek0yODkuOTI4MTQsMTU2Ljk1NjI1bC00Mi4yNDY4NiwtNDIuMjQ2ODZ2NDIuMjQ2ODh6IiBmaWxsPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjEiLz48L2c+PC9nPjwvc3ZnPjwhLS1yb3RhdGlvbkNlbnRlcjoxMTIuNjc3MDg1OjExMi42Nzc0MDUtLT4=';

  class Files {

    getInfo() {
      return {

        id: 'files',
        name: 'Files',

        color1: '#edb124',

        menuIconURI: icon,

        blocks: [
          {
            opcode: 'bool_block',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '[BOOL]',
            arguments: {
              BOOL: {
                type: Scratch.ArgumentType.BOOLEAN,
              }
            }
          },
          {
            opcode: 'string_block',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '[STRING]',
            arguments: {
              STRING: {
                type: Scratch.ArgumentType.STRING,
              }
            }
          },
          {
            opcode: 'accept_reporters_true_menu_block',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '[ACCEPT_REPORTERS_TRUE_MENU_VALUE]',
            arguments: {
              ACCEPT_REPORTERS_TRUE_MENU_VALUE: {
                type: Scratch.ArgumentType.STRING,  
                menu: 'accept_reporters_true_menu'
              }
            }
          },
          {
            opcode: 'accept_reporters_false_menu_block',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '[ACCEPT_REPORTERS_FALSE_MENU_VALUE]',
            arguments: {
              ACCEPT_REPORTERS_FALSE_MENU_VALUE: {
                type: Scratch.ArgumentType.STRING,  
                menu: 'accept_reporters_false_menu'
              }
            }
          }
        ],

        menus: {
          accept_reporters_true_menu: {
            acceptReporters: true,
            items: ['']
          },
          accept_reporters_false_menu: {
            acceptReporters: false,
            items: ['']
          }
        }
      }
    } 

    bool_block({BOOL}) {
      return '';
    }
    string_block({STRING}) {
      return '';
    }
    accept_reporters_true_menu_block({ACCEPT_REPORTERS_TRUE_MENU_VALUE}) {
      return '';
    }
    accept_reporters_false_menu_block({ACCEPT_REPORTERS_FALSE_MENU_VALUE}) {
      return '';
    }
  }

  Scratch.extensions.register(new Files());
})(Scratch);
