import { Controller, Get, Param } from '@nestjs/common';

@Controller('messages')
export class MessagesController {

    @Get()
    getMessages(){
      return {
          message: 'In a real example, I would return all of the messages'
      }
    }

    @Get(':id')
    getMessage(@Param('id') id){
        return {
            message: `In a real example, I would return the message with an id of ${id}`
        }
    }

}
