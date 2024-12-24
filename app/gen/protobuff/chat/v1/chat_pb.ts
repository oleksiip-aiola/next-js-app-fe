// @generated by protoc-gen-es v2.2.3 with parameter "target=ts,import_extension=none"
// @generated from file protobuff/chat/v1/chat.proto (package chat.v1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc, serviceDesc } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file protobuff/chat/v1/chat.proto.
 */
export const file_protobuff_chat_v1_chat: GenFile = /*@__PURE__*/
  fileDesc("Chxwcm90b2J1ZmYvY2hhdC92MS9jaGF0LnByb3RvEgdjaGF0LnYxIjMKElNlbmRNZXNzYWdlUmVxdWVzdBINCgV2YWx1ZRgBIAEoCRIOCgZyb29tSWQYAiABKAUiFQoTU2VuZE1lc3NhZ2VSZXNwb25zZSIiChBFbnRlclJvb21SZXF1ZXN0Eg4KBnJvb21JZBgBIAEoBSITChFFbnRlclJvb21SZXNwb25zZTKfAQoLQ2hhdFNlcnZpY2USSgoLU2VuZE1lc3NhZ2USGy5jaGF0LnYxLlNlbmRNZXNzYWdlUmVxdWVzdBocLmNoYXQudjEuU2VuZE1lc3NhZ2VSZXNwb25zZSIAEkQKCUVudGVyUm9vbRIZLmNoYXQudjEuRW50ZXJSb29tUmVxdWVzdBoaLmNoYXQudjEuRW50ZXJSb29tUmVzcG9uc2UiAEIwWi5naXRodWIuY29tL2FsZXh4cGV0cm92L2JlZWYvZ2VuL2NoYXQvdjE7Y2hhdHYxYgZwcm90bzM");

/**
 * @generated from message chat.v1.SendMessageRequest
 */
export type SendMessageRequest = Message<"chat.v1.SendMessageRequest"> & {
  /**
   * @generated from field: string value = 1;
   */
  value: string;

  /**
   * @generated from field: int32 roomId = 2;
   */
  roomId: number;
};

/**
 * Describes the message chat.v1.SendMessageRequest.
 * Use `create(SendMessageRequestSchema)` to create a new message.
 */
export const SendMessageRequestSchema: GenMessage<SendMessageRequest> = /*@__PURE__*/
  messageDesc(file_protobuff_chat_v1_chat, 0);

/**
 * @generated from message chat.v1.SendMessageResponse
 */
export type SendMessageResponse = Message<"chat.v1.SendMessageResponse"> & {
};

/**
 * Describes the message chat.v1.SendMessageResponse.
 * Use `create(SendMessageResponseSchema)` to create a new message.
 */
export const SendMessageResponseSchema: GenMessage<SendMessageResponse> = /*@__PURE__*/
  messageDesc(file_protobuff_chat_v1_chat, 1);

/**
 * @generated from message chat.v1.EnterRoomRequest
 */
export type EnterRoomRequest = Message<"chat.v1.EnterRoomRequest"> & {
  /**
   * @generated from field: int32 roomId = 1;
   */
  roomId: number;
};

/**
 * Describes the message chat.v1.EnterRoomRequest.
 * Use `create(EnterRoomRequestSchema)` to create a new message.
 */
export const EnterRoomRequestSchema: GenMessage<EnterRoomRequest> = /*@__PURE__*/
  messageDesc(file_protobuff_chat_v1_chat, 2);

/**
 * @generated from message chat.v1.EnterRoomResponse
 */
export type EnterRoomResponse = Message<"chat.v1.EnterRoomResponse"> & {
};

/**
 * Describes the message chat.v1.EnterRoomResponse.
 * Use `create(EnterRoomResponseSchema)` to create a new message.
 */
export const EnterRoomResponseSchema: GenMessage<EnterRoomResponse> = /*@__PURE__*/
  messageDesc(file_protobuff_chat_v1_chat, 3);

/**
 * @generated from service chat.v1.ChatService
 */
export const ChatService: GenService<{
  /**
   * @generated from rpc chat.v1.ChatService.SendMessage
   */
  sendMessage: {
    methodKind: "unary";
    input: typeof SendMessageRequestSchema;
    output: typeof SendMessageResponseSchema;
  },
  /**
   * @generated from rpc chat.v1.ChatService.EnterRoom
   */
  enterRoom: {
    methodKind: "unary";
    input: typeof EnterRoomRequestSchema;
    output: typeof EnterRoomResponseSchema;
  },
}> = /*@__PURE__*/
  serviceDesc(file_protobuff_chat_v1_chat, 0);

