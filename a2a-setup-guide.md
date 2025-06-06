# A2A Agent Configuration for File Handling in n8n

## **Summary for Non-Technical Users**
This guide helps you configure your agent to **exchange files** (images, documents, audio, etc.) with other AI systems using the A2A protocol. Here's what you need to know:

- **What it does**:  
  Your agent will declare which **file types** it can **receive** (e.g., Word docs, PDFs) and **send** (e.g., converted PDFs, images). Other agents will know what your system supports.

- **Supported File Types**:  
  - **Images**: PNG, JPG  
  - **Documents**: Word (.docx), Excel (.xlsx), PowerPoint (.pptx), PDF, Markdown (.md)  
  - **Audio**: MP3, WAV  
  - **Output Formats**: PDF, Markdown, and more (configurable).

- **Key Steps**:  
  1. **Declare supported files** in a simple JSON file (`agent.json`).  
  2. **Set up security** (e.g., passwords or API keys) to protect file access.  
  3. **Test** by sending/receiving files with other agents.

---

# A2A Agent Configuration for File Handling in n8n

## **Key Fields Explained**

# A2A Agent Configuration for File Handling in n8n

## **Agent Card (`agent.json`) Setup**
Host this file at `/.well-known/agent.json` on your server to declare supported file types.

---

### **Key Fields Explained**
1. **`defaultInputModes`**  
   List of MIME types your agent **accepts** as input.  
   Example values for files:  
   ```json
   "defaultInputModes": [
     "image/png",
     "image/jpeg",
     "audio/mpeg",
     "application/pdf",
     "text/markdown",
     "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
     "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
     "application/vnd.openxmlformats-officedocument.presentationml.presentation"
   ]
   ```

2. **`defaultOutputModes`**  
   MIME types your agent **produces** as output.  
   Example:  
   ```json
   "defaultOutputModes": [
     "application/pdf",
     "text/markdown",
     "image/png"
   ]
   ```

---

### **Supported File Types & MIME Types**
| **File Type** | **MIME Type**                                                               | **Usage**                         |
| ------------- | --------------------------------------------------------------------------- | --------------------------------- |
| **Images**    | `image/png`, `image/jpeg`                                                   | For images (PNG, JPG).            |
| **Audio**     | `audio/mpeg`, `audio/webm`                                                  | For audio files (MP3, WAV, etc.). |
| **Documents** | `application/vnd.openxmlformats-officedocument.wordprocessingml.document`   | For `.docx` (Word).               |
|               | `application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`         | For `.xlsx` (Excel).              |
|               | `application/vnd.openxmlformats-officedocument.presentationml.presentation` | For `.pptx` (PowerPoint).         |
| **PDF**       | `application/pdf`                                                           | For PDF files.                    |
| **Markdown**  | `text/markdown`                                                             | For `.md` files.                  |

---

### **Example `agent.json` Configuration**
```json
{
  "name": "File Handling Agent",
  "description": "Processes images, documents, and audio files",
  "url": "https://your-agent.example.com",
  "version": "1.0.0",
  "capabilities": {
    "streaming": true
  },
  "defaultInputModes": [
    "image/png",
    "application/pdf",
    "text/markdown",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
  ],
  "defaultOutputModes": [
    "application/pdf",
    "text/markdown"
  ],
  "skills": [
    {
      "id": "document-converter",
      "name": "Document Converter",
      "description": "Converts documents to PDF",
      "inputModes": ["application/vnd.openxmlformats-officedocument.wordprocessingml.document"],
      "outputModes": ["application/pdf"]
    }
  ]
}
```

---

### **Handling Files in Messages & Artifacts**
#### **Receiving Files (Input)**
- **Client sends a file** via a `FilePart` in a `Message`:  
  ```json
  "parts": [
    {
      "type": "file",
      "file": {
        "name": "report.docx",
        "mimeType": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        "uri": "https://client.com/files/report.docx"
      }
    }
  ]
  ```
- **Your Agent's Response**:  
  Process the file (e.g., convert to PDF) and return a `FilePart` in the `Artifact`:  
  ```json
  "artifacts": [
    {
      "parts": [
        {
          "type": "file",
          "file": {
            "name": "report.pdf",
            "mimeType": "application/pdf",
            "uri": "https://your-agent.com/outputs/report.pdf"
          }
        }
      ]
    }
  ]
  ```

---

### **Security & Best Practices**
1. **Validate MIME Types**:**  
   Ensure incoming files match declared `defaultInputModes` to prevent attacks.
2. **Secure File URIs**:  
   Use signed URLs or authentication for file access (e.g., JWT tokens).
3. **Storage**:  
   Store files in a secure location (e.g., cloud storage) and return valid `uri` pointers.

---

### **Example Workflow in n8n**
1. **Receive a File**:  
   - Use n8n's **HTTP Request Node** to parse incoming `FilePart` data.  
   - Validate MIME type against `defaultInputModes`.  
2. **Process the File**:  
   - Use n8n nodes to handle conversion (e.g., convert `.docx` to PDF).  
3. **Return Results**:  
   - Generate a `FilePart` with the processed file's URI in the response.
___

# Setting Up an n8n Agent for A2A Protocol

## **n8n Setup Guide for A2A**
This section explains how to configure n8n workflows to act as an A2A-compliant agent.

---

### **Prerequisites**
1. **n8n Installed**:** Ensure n8n is running on your server.
2. **Dependencies**:**  
   - `HTTP Request` nodes for handling API calls.
   - `JSON` nodes for parsing A2A messages.
   - `File System` or cloud storage (e.g., AWS S3) for file handling.

---

### **Step 1: Define Agent Capabilities (`agent.json`)**
Host this file at `/.well-known/agent.json` on your server. Example snippet:
```json
{
  "name": "n8n File Agent",
  "url": "https://your-n8n-server.com",
  "defaultInputModes": [
    "image/png",
    "application/pdf",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
  ],
  "defaultOutputModes": [
    "application/pdf",
    "text/markdown"
  ],
  "capabilities": {
    "streaming": true
  }
}
```

---

### **Step 2: Create Core A2A Endpoints**
Build n8n workflows for A2A’s required methods:

#### **A. `message/send` Endpoint**
1. **Trigger**: Use an **HTTP Request** node to listen on `/a2a` (POST method).  
2. **Parse JSON-RPC Request**:  
   - Use a **JSON Parse** node to extract the `method` (e.g., `message/send`).  
3. **Process the File**:  
   - For files, validate MIME type against `defaultInputModes`.  
   - Use **File System** nodes to store/upload files.  
4. **Return Response**:  
   - Generate a `Task` object with a `taskId` and status.  
   - Example response:  
     ```json
     {
       "id": "123",
       "result": {
         "task": {
           "id": "task_001",
           "status": { "state": "working" }
       }
     }
     ```

#### **B. `message/stream` for Real-Time Updates**
- Use **Server-Sent Events (SSE)** via n8n’s **WebSocket** or **HTTP Streaming** nodes to send incremental updates.  
- Example workflow:  
  ```mermaid
  graph LR
    A[HTTP Request (message/stream)] --> B{Process File}
    B --> C[Generate Streaming Updates]
    C --> D[Send SSE Event]
  ```

---

### **Step 3: Handle File Uploads & Downloads**
#### **Receiving Files**
1. **Parse `FilePart` from `Message`:**  
   - Extract the `uri` from the incoming `FilePart`.  
   - Use **HTTP Request** nodes to download the file from the provided URL.  
2. **Validate MIME Type:**  
   - Compare the file’s MIME type with `defaultInputModes` to prevent invalid formats.

#### **Sending Files**
1. **Store Processed Files:**  
   - Save converted/processed files to a storage location (e.g., cloud storage).  
2. **Return as `Artifact`:**  
   - Include the file’s URI in a `FilePart` within the `Artifact` response.  
   ```json
   "artifacts": [
     {
       "parts": [
         {
           "type": "file",
           "file": {
             "name": "output.pdf",
             "mimeType": "application/pdf",
             "uri": "https://your-storage.com/outputs/output.pdf"
           }
         }
       ]
     }
   ]
   ```

---

### **Step 4: Security & Authentication**
1. **Add Authentication**:  
   - Use n8n’s **OAuth** or **API Key** nodes to enforce security.  
   - Reference `securitySchemes` in your `agent.json` (e.g., API key headers).  
2. **MIME Validation**:  
   - Use **Condition** nodes to reject unsupported file types.

---

### **Testing Your Setup**
1. **Test with A2A CLI**:  
   ```bash
   a2a-cli message/send --agent http://your-n8n-server.com --message "Convert this document" --file-path ./input.docx
   ```
2. **Check Responses**:  
   - Verify `taskId` and `status` in responses.  
   - Ensure files are stored/accessibly at the returned `uri`.

---

### **Common Issues**
- **Error `-32005` (MIME Type Mismatch):**  
  - Ensure your `agent.json` includes the file’s MIME type in `defaultInputModes`.  
- **File Not Found:**  
  - Verify file URIs are publicly accessible or use signed URLs for security.  

For advanced use cases, refer to the [A2A Specification](https://github.com/google-a2a/A2A/blob/main/specification/json/a2a.json).

This section provides a practical, step-by-step guide for configuring n8n workflows to comply with A2A’s file handling requirements while integrating with n8n’s node-based workflow system.
```

---

### **Troubleshooting**

- **Error `-32005` (MIME Type Mismatch)**:  
  This occurs if a client sends a file type your agent doesn’t support.  
  **Fix**: Check your `defaultInputModes` in `agent.json` to ensure it includes the MIME type of the file being sent (e.g., `application/pdf` for PDFs).  

- **Streaming Large Files**:  
  For real-time updates during large file processing, use the `message/stream` method. This sends progress updates incrementally instead of waiting for the full task to complete.  
  **Example**:  
  ```json
  {
    "method": "message/stream",
    "params": { ... }
  }
  ```

- **File Upload Issues**:  
  If files aren’t received, verify:  
  1. The file’s MIME type matches your declared `defaultInputModes`.  
  2. File URIs are valid and accessible (e.g., use signed URLs for security).  

- **Output Format Errors**:  
  If outputs aren’t generated, ensure your `defaultOutputModes` includes the desired format (e.g., `application/pdf` for PDFs.  
```

For more details, refer to the [A2A Protocol Specification](https://github.com/google-a2a/A2A/blob/main/specification/json/a2a.json).
